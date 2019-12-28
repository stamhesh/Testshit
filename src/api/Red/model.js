import mongoose, { Schema } from 'mongoose'

const redSchema = new Schema({
  name: {
    type: String
  },
  sessionid: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

redSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      sessionid: this.sessionid,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Red', redSchema)

export const schema = model.schema
export default model
