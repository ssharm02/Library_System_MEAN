module.exports = mongoose => {
  var bookSchema = mongoose.Schema(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      quantity: { type: String, required: true },
      canBeLent: { type: Boolean, required: true },
      price: { type: Number, required: true },
      published: { type: Boolean, required: true },
      condition: { type: String, required: true },
      category: { type: String, required: true },
      bookImage: { data: Buffer, contentType: String }
    },
    { timestamps: true }
  );

  bookSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const LibraryBooks = mongoose.model('librarybook', bookSchema);
  return LibraryBooks;
};
