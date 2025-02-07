import mongoose from "mongoose";
const { Schema } = mongoose;

const tanksSchema = new Schema({
  NameModel: {
    type: String,
    required: true,
  },
  Weight: {
    type: String,
    required: true,
  },
  Speed: {
    type: String,
    required: true, // Number биш, String байх ёстой (жишээ нь: "45km")
  },
  Turretsize: {
    // Turretsize биш, TurretSize гэж нэг мөрдөх
    type: String,
    required: true,
  },
  Origin: {
    type: String,
    required: true,
  },
});

export const Tanks = mongoose.model("Tanks", tanksSchema);
