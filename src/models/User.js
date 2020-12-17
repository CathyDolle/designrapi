import { Schema, model } from "mongoose"

const User = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name required"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "Last name required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email required"],
      unique: true
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Password required"],
    },
    subscription:{
      type: String,
      default: 'free',
    }
  },
  {
    timestamps: true, // Ajoute 2 champs au document: createdAt et updatedAt
  }
)

export default model("User", User)
