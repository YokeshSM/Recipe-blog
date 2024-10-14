import React, { useRef, useState } from "react";
import { CirclePlus } from "lucide-react";
import { MdCancel } from "react-icons/md";
import { addRecipe } from "../services/api";
import { toast } from "react-toastify";
// import { Toaster, toast } from 'sonner';
const AddComponent = ({fetchrecipes}) => {
  const nameRef=useRef(null)
  const imageRef=useRef(null)
  const ingredientRef=useRef(null)
  const methodRef=useRef(null)
  const prepTimeRef=useRef(null)
  const servingRef=useRef(null)

  const handleAdd = async (e) => {
    e.preventDefault();
console.log(nameRef.current.value)
console.log(imageRef.current.value)
    const RecipeData = {
      name: nameRef.current.value,
      image: imageRef.current.value,
      ingredients:ingredientRef.current.value.split(",").map(ingredient=>ingredient.trim()),
      method: methodRef.current.value,
      prepTime:prepTimeRef.current.value,
      servings:servingRef.current.value,
      like:0
    };
    try {
      const response = await addRecipe(RecipeData);
      if (response.status === 201) {
        console.log("succefully added")
        toast.success("Project added successfully!");
        toast("Project added!", {
          className:
            "bg-gradient-to-r from-green-500 to-lime-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold",
          // icon: <Check />,
        });
        fetchrecipes();
      }
    } catch (error) {
      console.log(error)
      toast("Error", {
        className:
          "bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold",
        // icon: <MessageCircleWarning />,
      });
    }

    setvisible(false);
  };

  const [visible, setvisible] = useState(false);

  return (
    <>
      <div>
        <button
          className="p-3 rounded-md  bg-blue-700 flex justify-end text-white"
          onClick={() => setvisible(true)}
        >
          <CirclePlus className="p-1 size-8" />
        </button>
      </div>
      {visible && (
        <>
          <div className="fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center backdrop-blur-sm">
            <div className="p-6 w-full max-w-md bg-white rounded-lg border-black border-2 ">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">ADD YOUR RECIPE</h1>
                <MdCancel
                  onClick={() => setvisible(false)}
                  className="text-4xl text-red-500 hover:text-red-700"
                />
              </div>
              <form onSubmit={handleAdd}>
              <input ref={nameRef} type="text" placeholder="Recipe Name..." className="w-full border-2 placeholder:text-zinc-500 rounded-lg my-2 border-black p-2" required />
              <input ref={imageRef} type="text" placeholder="Image Link..." className="w-full border-2 placeholder:text-zinc-500 rounded-lg my-2 border-black p-2" required />
              <input ref={prepTimeRef} type="text" placeholder="Preparation Time..." className="w-full border-2 placeholder:text-zinc-500 rounded-lg my-2 border-black p-2" required />
              <input ref={servingRef} type="text" placeholder="Servings...(eg=13)" className="w-full border-2 placeholder:text-zinc-500 rounded-lg my-2 border-black p-2" required />
              <input ref={ingredientRef} type="text" placeholder="Ingredients...(Split the input by commas)" className="w-full border-2 placeholder:text-zinc-500 rounded-lg my-2 border-black p-2" required />
              <textarea ref={methodRef} placeholder="Recipe's Procedure" className="w-full border-2 placeholder:text-zinc-500 rounded-lg my-2 border-black p-2" required></textarea>
              <button type="submit" className="mt-2 flex justify-center items-center w-full bg-green-500 p-2 rounded-lg text-2xl">
                ADD
              </button>
            </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddComponent;
