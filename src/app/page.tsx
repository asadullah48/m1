import Image from "next/image";

export default function HelloWorld(){
  return(
    
    <h1
    style={{
      // transform:scale (1.9),
      fontSize: '24px',
      fontWeight: 'bold',
      cursor: 'pointer',
      textDecoration:"2px solid purple underline",
      textAlign: "center",
      fontFamily:"cursive",
      
    }}
          >Hello World</h1>
  )
}