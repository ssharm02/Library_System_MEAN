module.exports = mongoose => {
  var patronSchema = mongoose.Schema(
    {
      patronEmail: { type: String, required: true },
      patronName: { type: String, required: true },
      patronFine: { type: Number, required: false },
      patronCanLend: { type: Boolean, required: true },
      patronIsBanned: { type: Boolean, required: true },
      patronImage: { data: Buffer, contentType: String },
      patronBooksOwned: [
        {
          bookLent: {
            type: String,
            required: true
          },
          daysLent: {
            type: Number,
            required: true
          },
          dueIn: {
            type: Number,
            required: true
          }
        }
      ]
    },
    { timestamps: true }
  );

  patronSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const LibraryPatron = mongoose.model('librarypatron', patronSchema);
  return LibraryPatron;
};
