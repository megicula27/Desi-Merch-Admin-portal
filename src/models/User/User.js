// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // Ensures that usernames are unique across the entire database
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin", "manager"], // Different admin roles
      default: "user",
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },

    phoneNumber: {
      type: String,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: true, // Whether the user account is active
    },
    // permissions: {
    //   canManageProducts: { type: Boolean, default: false }, // Permission to add/edit/delete products
    //   canViewSales: { type: Boolean, default: false }, // Permission to view sales reports
    //   canApproveOrders: { type: Boolean, default: false }, // Permission to approve/reject orders
    //   canManageUsers: { type: Boolean, default: false }, // Permission to add/edit/delete other users
    // },
    profilePicture: {
      type: String, // URL or path to the user's profile picture
    },
    lastLogin: {
      type: Date, // Tracks the last time the user logged in
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Export model
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
