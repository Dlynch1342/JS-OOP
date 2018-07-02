<html>

<head>
    <title>Javascript Demo</title>
    <style>
        body {
            background-color: black;
            font-family: monospace;
            color: white;
            font-size: 50px;
            text-align: center;
            margin-top: 20%;
        }
        
        #magic {
            color: #777;
            border-right: 1px solid #777;
            padding-right: 7px;
            display: inline-block;
        }
    </style>
</head>

<body>

    Coding is
    <div id="magic"></div>

    <script>
        var words = ["a lot of fun", "about not giving up", "challenging and empowering", "creative expression",
                "what I learned at CodingDojo!"
            ],
            el = document.getElementById('magic'),
            word_counter = 0,
            character_counter = 0;
        function updateText() {
            var nextchar = words[word_counter][character_counter++];
            if (nextchar == " ") {
                nextchar = "&nbsp";
            }
            el.innerHTML = el.innerHTML + nextchar;
            if (character_counter > words[word_counter].length) {
                word_counter++; //choose a different word
                character_counter = 0; //start over with the first character of the word
                el.innerHTML = ''; //set the html to be blank
                //if we're displaying the last word, go back to the first word
                word_counter %= words.length;
            }
        }
        setInterval(updateText, 300);
    </script>
</body>

</html>