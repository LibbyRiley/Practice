

document.getElementById("first-choice").innerHTML = "You've been entered into the TriWizard Tournament! The First Task: Rescue the Golden Egg from a Dragon.";

var fightRunFly = ["fight", "run", "fly"];

for (var i = 0 ; i < fightRunFly.length; i++) {
   var buttons = 

   document.getElementById("choice-container").innerHTML = '<input type="submit" value="'+ fightRunFly[i] +'" name="'+ fightRunFly[i] +'">';
}


switch (user) {
    case 'FIGHT':
        var spell = prompt("Did you practice your DADA (Defence Against Dark Arts) homework? Answer YES or NO.").toUpperCase();
        var aim = prompt("How is your wand aim, GOOD or POOR?").toUpperCase();
        if(spell == "YES" && aim == "GOOD"){
            console.log("You strike the Horntail with a Conjuctivitus Curse... The dragon is blinded, and in a rage! You grab the Golden Egg and get a nasty burn on you leg in the process. The judges award you 80/100 points and a Mediwitch patches you up. Good work!");
        } else if (spell == "NO" && aim == "GOOD"){
            console.log("You strike the Horntail with a Confundus Charm... The dragon is confused, it hurt itself in its confusion! You grab the Golden Egg and race back to safety. The judges award you 80/100 points and the Charlie and the other Dragon Keepers patch up the dragon. Good work!");
        } else {
            console.log("You fire a spell at the dragon but miss badly... The dragon lunges towards you and you dive behind a boulder just in time. Scrambling towards the nest, you dodge a fireball and strike back with a Flame-Freezing Charm. This gives you just enough time to grab the Golden Egg and race back to safety. The judges award you 50/100 points. Wand work was a bit sloppy but you did it!");
        }
        break;
    case 'RUN':
        var speed = prompt("Are you fast, YES or NO?").toUpperCase();
        var clever = prompt("Are you clever, YES or NO?").toUpperCase();
        if (speed == "YES" || clever == "YES") {
            console.log("You quickly run between a couple of nearby boulders, and to confuse the dragon you transfigure a rock into a Retriever. The dog runs off barking, which distracts the dragon, giving you time to grab the Golden Egg and race back to safety. The judges award you 90/100 points. Quick and clever, well done!");
        } else {
            console.log("You try running in a zigzag pattern to avoid getting burnt to a crisp... But the Horntail is too fast and clever, and you wake up in the Infirmary, being tended to by Madame Pomfrey. You scored no points. Maybe try some magic in the next task?");
        }
        break;
    case 'FLY':
        console.log("'Accio Firebolt!' You summon your broom and with a swift dive, you scoop up the egg! The judges award you full points for skill, creativity and for having really great hair. Wooohooo!");
        break;
    default:
        console.log("Sorry I dont speak Gobbledegook! Try again, do you FIGHT, RUN, or FLY?");
}
