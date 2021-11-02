async function translator() {
    let inputs = document.getElementById("inputBox").value;
    let outputs = document.getElementById("outputBox");

    let selectInput = document.getElementById("input_language").value;
    // console.log(selectInput);

    let selectOutput = document.getElementById("output_language").value;
    // console.log(selectOutput);


    const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: inputs,
            source: selectInput,
            target: selectOutput,
        }),
        headers: { "Content-Type": "application/json" }
    })
    // console.log(await res.json());
    .then((res)=>{
        let data =  res.json();
        // console.log(data);
        return data;
    }).then((data)=>{
        console.log(data);
        outputs.innerHTML = data.translatedText;
    })
    .catch((err)=>{
        console.log(err);
    })
}

function voice() {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recoginition = new SpeechRecognition();
    recoginition.lang = "auto";
    recoginition.onresult = function (event) {
        // console.log(event);
        let input = document.getElementById('inputBox');
        input.textContent = null;
        input.innerText = event.results[0][0].transcript;
    }
    recoginition.start();
}


