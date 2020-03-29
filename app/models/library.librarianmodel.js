module.exports = mongoose => {
  var librarianSchema = mongoose.Schema({
    name: { type: String, required: true },
    librarianImage: { data: Buffer, contentType: String, required: true },
    typeof: { type: String, required: true },
    experience: { type: String, required: true },
    education: { type: String, required: true },
    canGiveFines: { type: Boolean, required: true },
    canBanPatrons: { type: Boolean, required: true },
    canCreatePatrons: { type: Boolean, rquired: true },
    canCreateBooks: { type: Boolean, required: true },
    canDestroyBooks: { type: Boolean, required: true },
    salary: { type: Number, required: true },
    commisionFromFines: { type: Number, required: true },
    canBorrowBooks: { type: Boolean, required: true },
    canDeleteRatings: { type: Boolean, required: true },
    canRateBooks: { type: Boolean, required: true },
    avatar: {
      type: String
    }
  });

  schema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Librarian = mongoose.model('librarian', librarianSchema);
  return Librarian;
};
