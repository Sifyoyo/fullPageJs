
const firstSection = document.getElementById("first-section");
const secondSection = document.getElementById("second-section");
const thirdSection = document.getElementById("third-section");

const pointContainer = document.getElementById("customScrollAnchors")
const all_point = document.querySelectorAll(".navPoints")
const point_one = document.getElementById("point_one");
const point_two = document.getElementById("point_two");
const point_three = document.getElementById("point_three");



// window.addEventListener("load", () => {

// }, false);

let currentSection = firstSection;
let currentPoint = point_one;
let scrollCooldown = false;

window.addEventListener("wheel", (event) => {



    if(event.deltaY > 0 && !scrollCooldown){
        console.log("scroll down")

        if(currentSection.nextSibling.nextSibling === null){

        }
        else{

            scrollCooldown = true;

            //Customized scroll
            currentPoint.classList.remove("activePoint")
            currentPoint = currentPoint.nextSibling.nextSibling
            currentPoint.classList.add("activePoint")

            //Section 
            currentSection.style.transform = "translateY(-100vh)"
            currentSection = currentSection.nextSibling.nextSibling      
            currentSection.style.transform = "translateY(0vh)"
            setTimeout(()=>{scrollCooldown = false},1000);
        
        }

    }

    if(event.deltaY < 0 && !scrollCooldown){
        console.log("scroll up")
        if(currentSection.previousSibling.previousSibling === null){

        }
        else{

            scrollCooldown = true;

            //Customized scroll
            currentPoint.classList.remove("activePoint")
            currentPoint = currentPoint.previousSibling.previousSibling  
            currentPoint.classList.add("activePoint")
            
            //Section
            currentSection.style.transform = "translateY(100vh)"
            currentSection = currentSection.previousSibling.previousSibling        
            currentSection.style.transform = "translateY(0vh)"
            setTimeout(()=>{scrollCooldown = false},1000);
        }
    }
   
})


// STILL UNDERWORK MUST CONTINUE (NAVIGATE WITH CUSTOM SIDEBAR POINTS)
//STILL NO OPTIMIZED



all_point.forEach((point, i) => {

    point.addEventListener("click", () => {

        if(point.classList.contains("activePoint")){
            
            console.log("Same current", currentPoint)

        }
        
        if(!scrollCooldown){


            currentPoint.classList.remove("activePoint")
            currentPoint = point;
            currentPoint.classList.add("activePoint");

            //Hvis 1st meny punkt blir trykket
            if(i === 0){
                if(currentSection === secondSection){
                    currentSection.style.transform = "translateY(100vh)"
                    currentSection = currentSection.previousSibling.previousSibling        
                    currentSection.style.transform = "translateY(0vh)"
                }

                if(currentSection === thirdSection){
                    for(let index =  0; index < 2; index++){
                        currentSection.style.transform = "translateY(100vh)"
                        currentSection = currentSection.previousSibling.previousSibling        
                        currentSection.style.transform = "translateY(0vh)"
                    }
                }

                scrollCooldown = true;
            }


            //Hvis 2nd meny punkt blir trykket
            if(i === 1){

                if(currentSection === firstSection){
                currentSection.style.transform = "translateY(-100vh)"
                currentSection = currentSection.nextSibling.nextSibling      
                currentSection.style.transform = "translateY(0vh)"
                }
                
                if(currentSection === thirdSection){
                    currentSection.style.transform = "translateY(100vh)"
                    currentSection = currentSection.previousSibling.previousSibling        
                    currentSection.style.transform = "translateY(0vh)"
                }

                scrollCooldown = true;

            }


            //Hvis 3rd meny punkt blir trykket
            if(i === 2){

                if(currentSection === firstSection){

                    for(let index =  0; index < 2; index++){
                    currentSection.style.transform = "translateY(-100vh)"
                    currentSection = currentSection.nextSibling.nextSibling      
                    currentSection.style.transform = "translateY(0vh)"
                }
                }

                if(currentSection === secondSection){
                    currentSection.style.transform = "translateY(-100vh)"
                    currentSection = currentSection.nextSibling.nextSibling      
                    currentSection.style.transform = "translateY(0vh)"
                }

                scrollCooldown = true;
            }

            console.log("new current", currentPoint, "current" + i)


            setTimeout(()=>{scrollCooldown = false},1000);
        }

    })
})

