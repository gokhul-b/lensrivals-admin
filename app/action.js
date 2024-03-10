import { db } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { revalidatePath } from "next/cache";

export const createCompetition = async (form) => {
  try {
    const response = await addDoc(collection(db, "competitions"), form);
    // revalidatePath("/");
    return response;
  } catch (e) {
    return e;
  }
};
