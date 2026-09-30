try{
let bibleversenumberdiplayer=document.querySelector("#bibleversenumberdiplayer");
let bibleversetextdiplayer=document.querySelector("#bibleversetextdiplayer");



const bibleVerses = [
  {
    reference: "John 3:16",
    text: "For God so loved the world, that he gave his only begotten Son, that whoever believes in him should not perish, but have eternal life."
  },
  {
    reference: "Psalm 23:1",
    text: "Yahweh is my shepherd: I shall lack nothing."
  },
  {
    reference: "Jeremiah 29:11",
    text: "For I know the thoughts that I think toward you, says Yahweh, thoughts of peace, and not of evil, to give you hope and a future."
  },
  {
    reference: "Philippians 4:13",
    text: "I can do all things through Christ, who strengthens me."
  },
  {
    reference: "Isaiah 41:10",
    text: "Don't be afraid, for I am with you. Don't be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness."
  },
  {
    reference: "Psalm 46:10",
    text: "Be still, and know that I am God."
  },
  {
    reference: "Proverbs 3:5",
    text: "Trust in Yahweh with all your heart, and don't lean on your own understanding."
  },
  {
    reference: "Romans 8:28",
    text: "We know that all things work together for good for those who love God, for those who are called according to his purpose."
  },
  {
    reference: "Matthew 11:28",
    text: "Come to me, all you who labor and are heavily burdened, and I will give you rest."
  },
  {
    reference: "Psalm 34:8",
    text: "Oh taste and see that Yahweh is good. Blessed is the man who takes refuge in him!"
  }
];



let p=0;
let p2=0;

function hh() {
   bibleversetextdiplayer.innerHTML=bibleVerses[p].reference;
   bibleversenumberdiplayer.innerHTML=bibleVerses[p].text;
  p+=1;
 
  if(p>=bibleVerses.length){
    p=0;
   
  
  }
 
}

let uu=setInterval(hh,4000);



}
catch{
 console.log("Error");
}

finally{
  console.log("Finised the progrogram");
}
