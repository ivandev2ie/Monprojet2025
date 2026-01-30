
"use client"
const App = () => {
  return (
   
    <User 
      
      img="data:image/png;base64,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"
      titre=" Fiche Etudiant "
      
      Nom="NDONGO"
      Prenoms="Ivan Fresnel"
      age={20}
    
      hobbies={["Coding", "Football", "Sleeping"]}
      nationalité={"Camerounaise"}
      cours1="Python"
      cours2="JavaScript"   
      cours3="HTML"
      cours4="CSS" >
      
      </User>
    
      
  );
};


const User = ({info,cours5,titre,img,Nom,Prenoms,age,isMarried, hobbies ,children,nationalité,cours1,cours2,cours3,cours4}) => {

  const handleClick = () => {
  alert("Adresse E_mail correcte");
};

  return (
    
    <div style={{ border: "1px solid gray", padding: "20px", maxWidth: "300px",justifyContent:"center",alignItems:"center",minHeight:"80vh",margin:"0",position: "absolute", top:"50%", left:"50%",transform: "translate(-50%,-50%)",backgroundColor:"#4CAF50"}}>
      
      <img src={img} alt={Nom} width={200} />
      <br/>
      <p><strong>{titre}</strong> </p>
      <br/>
      <h1>Name: {Nom}</h1>
      <h1>Prenom:{Prenoms}</h1>
      <h2>Age: {age }</h2>
      
      <h4>Hobbies: {hobbies.join(",")} </h4>
      <h4>Nationalité:{nationalité}</h4>
      <br/>
      <h4> <strong> Cours</strong> </h4>
      <br/>
      <ol>
        <li>{cours1}</li>
        <li>{cours2}</li>
        <li>{cours3}</li>
        <li>{cours4}</li>
        
      </ol>
      <br/>
      <input 
  type="text" 
  placeholder="Entrez votre addresse mail"/>
      <h1>{children}</h1>
     <button 
    onClick={handleClick} 
    style={{ padding: "10px 20px", marginTop: "10px", color:"white", textAlign:"center" }}
  >
    Cliquez Ici
  </button>
    </div>

  );
};

export default App;


