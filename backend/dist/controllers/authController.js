"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = require("zod");
const errorHandler_1 = require("../middleware/errorHandler");
const prisma = new client_1.PrismaClient();
// Validation schemas
const registerSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address'),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters')
});
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address'),
    password: zod_1.z.string()
});
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request body
        const validation = registerSchema.safeParse(req.body);
        if (!validation.success) {
            throw new errorHandler_1.AppError(validation.error.errors[0].message, 400);
        }
        const { email, password } = validation.data;
        // Check if user already exists
        const existingUser = yield prisma.user.findUnique({
            where: { email }
        });
        if (existingUser) {
            throw new errorHandler_1.AppError('User with this email already exists', 400);
        }
        // Hash password
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        // Create user
        const user = yield prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'fallback-secret', { expiresIn: '1h' });
        res.status(201).json({
            status: 'success',
            data: {
                user: { id: user.id, email: user.email },
                token
            }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request body
        const validation = loginSchema.safeParse(req.body);
        if (!validation.success) {
            throw new errorHandler_1.AppError(validation.error.errors[0].message, 400);
        }
        const { email, password } = validation.data;
        // Find user
        const user = yield prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            throw new errorHandler_1.AppError('Invalid email or password', 401);
        }
        // Check password
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            throw new errorHandler_1.AppError('Invalid email or password', 401);
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'fallback-secret', { expiresIn: '1h' });
        res.status(200).json({
            status: 'success',
            data: {
                user: { id: user.id, email: user.email },
                token
            }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.login = login;
