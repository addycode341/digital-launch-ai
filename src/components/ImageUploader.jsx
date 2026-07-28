import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { FiUploadCloud, FiX } from "react-icons/fi";


function ImageUploader({onComplete}){


const [images,setImages]=useState([]);





const onDrop=(acceptedFiles)=>{


const newImages = acceptedFiles.map((file)=>({

file,

preview:URL.createObjectURL(file)

}));


setImages(prev=>[
...prev,
...newImages
]);


};







const removeImage=(index)=>{


setImages(prev=>

prev.filter((_,i)=>i!==index)

);


};







const continueGenerate=()=>{


const imageUrls = images.map(
img=>img.preview
);


onComplete(imageUrls);


};







const {

getRootProps,

getInputProps,

isDragActive


}=useDropzone({


onDrop,


accept:{

"image/*":[

".png",
".jpg",
".jpeg",
".webp"

]

},


multiple:true,


maxFiles:10


});







return(


<section className="
py-10
px-6
">





<div className="
max-w-5xl
mx-auto
bg-white/[0.07]
border
border-white/10
backdrop-blur-xl
rounded-3xl
p-8
text-white
">







<h2 className="
text-3xl
font-bold
text-center
">

Upload Business Photos 📸

</h2>





<p className="
text-gray-400
text-center
mt-3
">

Add your products, shop, team or service images.

</p>








<div

{...getRootProps()}


className={`

mt-8

border-2

border-dashed

rounded-3xl

p-10

text-center

cursor-pointer

transition


${

isDragActive

?

"border-blue-400 bg-blue-500/10"

:

"border-white/20 hover:border-blue-400"

}

`}


>



<input {...getInputProps()}/>





<FiUploadCloud

className="
mx-auto
text-6xl
text-blue-400
mb-5
"

/>





<h3 className="
text-xl
font-bold
">

{

isDragActive

?

"Drop Images Here"

:

"Drag & Drop Business Images"

}


</h3>





<p className="
text-gray-400
mt-2
">

or click to upload

</p>





</div>









{

images.length>0 &&


<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
mt-8
">


{


images.map((img,index)=>(


<motion.div


key={index}


initial={{

opacity:0,
scale:.8

}}


animate={{

opacity:1,
scale:1

}}



className="
relative
rounded-xl
overflow-hidden
"

>


<img

src={img.preview}

alt="business"

className="
w-full
h-32
object-cover
"

/>





<button


onClick={()=>removeImage(index)}


className="
absolute
top-2
right-2
bg-red-500
p-2
rounded-full
"


>


<FiX/>


</button>





</motion.div>



))


}



</div>



}









<button


disabled={images.length===0}


onClick={continueGenerate}


className="

mt-10

w-full

py-4

rounded-xl

bg-gradient-to-r

from-blue-600

to-purple-600

font-bold

text-lg

hover:scale-105

transition

disabled:opacity-50

"

>


Create Website Demo 🚀


</button>









</div>


</section>


)


}


export default ImageUploader;