var scene = canvallax.Scene({
        className: 'bg-canvas'
    }),
    width = document.body.clientWidth,
    height = document.body.clientHeight;

canvallax.TrackScroll({ ease: 15 }).add(scene);

////////////////////////////////////////

canvallax.createGradient = (function(){
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        defaults = {
            x0: 100,
            y0: 0,
            x1: 0,
            y1: 100,
            size: 100,
            angle: 0,
            colors: ['#d1748e','#d1748e']
        };
    return function(options){

        var opts = canvallax.extend({},defaults,options),
            gradient = ctx.createLinearGradient(opts.x0,opts.y0,opts.x1,opts.y1),
            colors = opts.colors || [],
            length = colors.length,
            colorStops = 1 / length,
            i = 0;

        for (; i < length; i++) {
            gradient.addColorStop(i * colorStops, colors[i]);//#E1F6F4');
        }
        return gradient;
    };

})();

var rect = canvallax.Rectangle({
    zIndex: 2,
    opacity: 1,
    fixed: true,
    width: width,
    height: height,
    fill: canvallax.createGradient({
        x0: 0,
        y0: window.innerHeight,
        x1: window.innerWidth,
        y1: 0,
        colors: ['#f2f2f2','#f2f2f2']
    })
});

scene.add(rect);


////////////////////////////////////////


function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

var i = 0,
    polygons = [],
    width = document.body.clientWidth,
    height = document.body.clientHeight + 2000,
    count = Math.round(width + height) * 0.02,
    p,
    distance;

function postRender(ctx,C){
    this.y += this.speed;
    if ( this.y > (height * 3) / this.z) { this.y = ( -200 / this.z ); }
}

for (; i < count; i++){
    distance = 1;

    p = canvallax.Image({
        src: '../images/lightning_black.png',

        x: i * (width / count) / distance,
        y: randomRange(-300,height*3),
        z: distance,
        zIndex: 3 + (distance * 10),

        speed: randomRange(1,2),
        postRender: postRender
    });

    polygons.push(p);
}
scene.add(polygons);
