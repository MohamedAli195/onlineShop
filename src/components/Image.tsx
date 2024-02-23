interface Iprops {
imageURL:string,
imageAlt:string,
imageClass:string
}

function Image({imageURL,imageAlt,imageClass}:Iprops) {
  return (
    <img src={imageURL} alt={imageAlt} className={imageClass}/>
  )
}

export default Image