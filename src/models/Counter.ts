import { Schema, model, models } from 'mongoose'

const CounterSchema = new Schema(
  {
    amount: {
      type: Number,
      required: [true, 'The amount is required'],
      trim: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default models.Counter || model('Counter', CounterSchema)
