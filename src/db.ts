import mongoose from "mongoose";
mongoose.set("strictQuery", false);
async function connect() {
  const DB_CONNECTION =
    "mongodb+srv://krishnendudakshi:SvPAWghO2zmBLL1X@testcluster.mcb49vu.mongodb.net/Aagman?retryWrites=true&w=majority";

  try {
    mongoose
      .connect(DB_CONNECTION)
      .then(() => console.log("Database is connected"))
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

export default connect;
