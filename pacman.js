
        var pos = 0;
        //pacArray is a two dimensional array
        const pacArray = [
            ['PacMan1.png', 'PacMan2.png'], //PacMan going left to right
            ['PacMan3.png', 'PacMan4.png']  //PacMan going right to left
        ];
        var direction = 0;
        var focus = 0;
        let pageWidth = window.innerWidth;
    
        function Run() {
            let img = document.getElementById("PacMan");
            let imgWidth = img.width
            focus = (focus + 1) % 2;
            direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
            img.src = pacArray[direction][focus];
            if (direction) {
                pos -= 20; // if direction is ture (1), pos is incremented by 20.
                img.style.left = pos + "px";
            } else {
                pos += 20;
                img.style.left = pos + 'px';
            }
            setTimeout(Run, 200); // Use setTimeout to call Run every 200 millesecs
        }
    // checkPageBounds will check direction by position in page.
        function checkPageBounds(direction, imgWidth) {
            if (pos < 0){
                direction = 0;
            }
            else if (pos > pageWidth - imgWidth){
                direction = 1;
            }
            return direction;
        }
    