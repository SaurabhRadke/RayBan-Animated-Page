// Shery.imageEffect(element,config)
Shery.imageEffect(".back", {
  style: 3,
  config: {
    a: { value: 0.99, range: [0, 30] },
    b: { value: -0.9, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.768455551003687 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1.03, range: [0.1, 5] },
    durationIn: { value: 1.03, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.07, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.63, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.38, range: [0, 2] },
    noise_scale: { value: 14.05, range: [0, 100] },
  },
  gooey: true,
});
let allh=document.querySelectorAll("h1")
let elms=document.querySelectorAll('.text1')
elms.forEach(function(ele){
    let allh=ele.querySelectorAll("h1")
    let index=0
    var animating=false;
    document.querySelector('.main').addEventListener('click',function(){
        if (!animating){
            animating=true
            gsap.to(allh[index],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1,
                onComplete:function(){
                    gsap.set(this._targets[0],{top:"100%"});
                    animating=false
                },
                
            })
            index===allh.length-1 ? index=0:index++;
            gsap.to(allh[index],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1
            })
        }
    
})
})
