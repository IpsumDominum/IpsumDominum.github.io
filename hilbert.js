   
    
function hilbert(){
    var start_lines = [[0,1],[1,3],[3,2]];  
    var absolute_centers = get_centers();
    var cur_lines = get_lines(start_lines,absolute_centers);
    order = order_input.value;
    var re = new RegExp('[^0-9]+');
    var check = re.exec(order);
    if(check!=null){
        warn("please Enter a valid number :)");
        return;
    }else if(parseInt(order)>10){
        warn("Number entered too big!! Enable<strong style='color:rgb(255,100,100)'>Big Number mode</strong> to continue, at your own risk...");
        return;
    }
    for(ijj=0;ijj<parseInt(order);ijj++){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        if(ijj==0){
            draw_grid();
            grid_size = 2;
        }else{
            grid_size = Math.pow(2,ijj);
            draw_grid();
            left_t = send_to(scale(flip(cur_lines,"right"),2),"top_r");
            right_t = scale(flip(cur_lines,"left"),2);
            left_b = send_to(scale(cur_lines,2),"bot_l");
            right_b = send_to(scale(cur_lines,2),"bot_r");
            cur_lines = left_t.concat(right_t).concat(left_b).concat(right_b).concat(connect());
        }    
    }    
    draw(cur_lines);
}
//When transformed,take the current constructed points,
//Scale it by 2, and move it to different corners
    
function warn(message){
    document.getElementById('warning').innerHTML = message;
}
    
    
/*---------------------------------------------------*/
function get_lines(lines,centers){
    got_lines = [];
    for(i=0;i<lines.length;i++){
        temp1 = [];
        temp2 = [];
        temp1 = centers[lines[i][0]];
        temp2= centers[lines[i][1]];
        got_lines.push([temp1,temp2]);
    }
    return got_lines;
}
    
function get_centers(){
    var grid_centres = {};
    slot_size = ctx.canvas.width/2;
    var idx = 0;
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            grid_centres[idx] = [[i*slot_size+slot_size/2],[j*slot_size+slot_size/2]];
            idx +=1;
        }
    }
    return grid_centres;
}
function draw_grid(){
    ctx.strokeStyle = "black";
    slot_size = ctx.canvas.width/grid_size;
    var idx = 0;
    for(i=0;i<grid_size;i++){
        for(j=0;j<grid_size;j++){
            ctx.strokeRect(i*slot_size,j*slot_size,slot_size,slot_size);
            idx +=1;
        }
    }
}

function draw(lines){   
    if(!mystery_mode.checked){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        draw_grid();
        for(i=0;i<lines.length;i++){
             if(rainbow_mode.checked ||mystery_mode.checked){
                 var style = "rgb("+(Math.random()*255).toString() +","+ (Math.random()*255).toString()+","+ (Math.random()*255).toString() + ")";
                ctx.strokeStyle = style;
             }
            var line = lines[i];
            ctx.beginPath();            
            ctx.moveTo(line[0][0],line[0][1]);
            ctx.lineTo(line[1][0],line[1][1]);
            ctx.stroke();
        }
        return;
    }
    if(!drawing){
    animateIdx = 0;
    window.setInterval(function(){
        if(animateIdx<lines.length){
            if(rainbow_mode.checked ||mystery_mode.checked){
                 var style = "rgb("+(Math.random()*255).toString() +","+ (Math.random()*255).toString()+","+ (Math.random()*255).toString() + ")";
                ctx.strokeStyle = style;
             }
            var line = lines[animateIdx];
            ctx.beginPath();            
            ctx.moveTo(line[0][0],line[0][1]);
            ctx.lineTo(line[1][0],line[1][1]);
            ctx.stroke();
            animateIdx +=1;
        }else{
            window.clearInterval();
        }
    },10);
        drawing = true;
}else{
    window.clearInterval();
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    draw_grid();
    animateIdx = 0;
    window.setInterval(function(){
        if(animateIdx<lines.length){
            if(rainbow_mode.checked ||mystery_mode.checked){
                 var style = "rgb("+(Math.random()*255).toString() +","+ (Math.random()*255).toString()+","+ (Math.random()*255).toString() + ")";
                ctx.strokeStyle = style;
             }
            var line = lines[animateIdx];
            ctx.beginPath();            
            ctx.moveTo(line[0][0],line[0][1]);
            ctx.lineTo(line[1][0],line[1][1]);
            ctx.stroke();
            animateIdx +=1;
        }else{
        window.clearInterval();
        }
    },10);
}
}
function weird_translation(){
    var weird_num= 0;
    for(i=2;i<=grid_size;i*=2){
        weird_num += 1000/i;
    }
    weird_num = 500;
    console.log(weird_num);
    return weird_num;
}
function send_to(lines,position){
    var xShift = 0;
    var yShift = 0;
    var weird_num = weird_translation();
    if(position=="bot_l"){
        xShift = 0;
        yShift = weird_num;
    }else if(position=="bot_r"){
        xShift = weird_num;
        yShift = weird_num;
    }else if(position=="top_l"){
    }else if(position=="top_r"){
        xShift = weird_num;
        yShift = 0;
    }
    var sent_lines = [];
    for(i=0;i<lines.length;i++){
    var temp_line = [[],[]];
    var line = lines[i];
    temp_line[0][0] = line[0][0] + xShift;
    temp_line[0][1] = line[0][1] + yShift;
    temp_line[1][0] = line[1][0] + xShift;
    temp_line[1][1] = line[1][1] + yShift;        
    sent_lines.push(temp_line);
    }
    return sent_lines;
}
function scale(lines,amount){
    var scaled_lines = [];
    for(i=0;i<lines.length;i++){
        var temp_line = [[],[]];
        var line = lines[i];
        temp_line[0][0] = line[0][0]/amount;
        temp_line[0][1] = line[0][1]/amount;
        temp_line[1][0] = line[1][0]/amount;
        temp_line[1][1] = line[1][1]/amount;
        scaled_lines.push(temp_line);
    }
    return scaled_lines;
}
function connect(){
    var connect_lines = [];
    var line_width = ctx.canvas.height/(grid_size*2);
    var left_line = [[line_width/2,(ctx.canvas.height/2)-(line_width/2)],
                     [line_width/2,(ctx.canvas.height/2)+(line_width/2)]];
    var right_line = [[ctx.canvas.width-line_width/2,(ctx.canvas.height/2)-(line_width/2)],
                     [ctx.canvas.width-line_width/2,(ctx.canvas.height/2)+(line_width/2)]];
    var middle_line = [[ctx.canvas.width/2-line_width/2,(ctx.canvas.height/2)+(line_width/2)],
                     [ctx.canvas.width/2+line_width/2,(ctx.canvas.height/2)+(line_width/2)]];
    connect_lines.push(middle_line);
    connect_lines.push(left_line);
    connect_lines.push(right_line);
    return connect_lines;
}
function flip(lines,type){
    flipped_lines = [];
    for(i=0;i<lines.length;i++){
        var temp_line = [[],[]];
        var line = lines[i];
        var angle = 0;
        var shiftl = 0;
        var shiftr = 0;
        if(type=="left"){
            angle = -Math.PI/2;   
            shiftl = 4*ctx.canvas.width/(2*2);
            shiftr = 0;
        }else if(type=="right"){
            angle = Math.PI/2;   
            shiftr = 4*ctx.canvas.width/(2*2);
            shiftl = 0;
        }
        temp_line[0][0] = (line[0][0] * Math.cos(angle)) - (line[0][1] * Math.sin(angle)) +shiftr;
        temp_line[0][1] = (line[0][0] * Math.sin(angle)) + (line[0][1] * Math.cos(angle)) +shiftl;
        temp_line[1][0] = (line[1][0] * Math.cos(angle)) - (line[1][1] * Math.sin(angle)) +shiftr;
        temp_line[1][1] = (line[1][0] * Math.sin(angle)) + (line[1][1] * Math.cos(angle)) +shiftl;
        flipped_lines.push(temp_line);
    }
    return flipped_lines
}         
   
function reset(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    grid_size = 2;
    draw_grid();
    lines = [];
}