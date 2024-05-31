const NFTs =[]
function mintNFT (Full_Name, Hair_Colour, Shirt_Type, Face_Tone) {
    const NFT = {
        "name": Full_Name,
        "hairColur": Hair_Colour,
        "shirtType": Shirt_Type,
        "faceTone": Face_Tone,
    }
    NFTs.push(NFT);
    console.log("Created: "+ Full_Name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; NFTs.length; i++){
        console.log("Name: " +NFTs[i].name);
        console.log("hairColur: " +NFTs[i].hairColur);
        console.log("shirtType: " +NFTs[i].shirtType);
        console.log("faceTone: " +NFTs[i].faceTone);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Utkarsh", "Black", "Formal", "Fair");
mintNFT("Manas", "Brown", "Casual", "Fair");
mintNFT("Priyesh", "Black", "Hoodie", "Fair");
mintNFT("Anand", "white", "Casual", "Fair");
listNFTs();
getTotalSupply();
