import { Schema, model } from "mongoose"

const Color = new Schema(
  {
    name: {
      type: String,
      required: [true, "Le nom est obligatoire"],
    },
    hexa: String,
  },
  {
    _id: false,
  }
)

const Product = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Le nom est obligatoire"],
      unique: true,
    },
    colors: [Color],
    fonts: [String],
    category: {
      type: String,
    },
    // ... Rajoute ici ce que tu veux comme champs :)
  },
  {
    timestamps: true, // Ajoute 2 champs au document: createdAt et updatedAt
  }
)

export default model("Product", Product)
