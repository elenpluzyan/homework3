const f1 = function(a, b, c, d) {
	return a*c*(b+d);
};
const z = f1(75, 156, 5, 30)
console.log(z);

const f2 = function(m, n, l) {
	
};
console.log('Hi');

const f3 = function() {
		return 3;
};
console.log(f3());

const f4 = function(srting1, string2, string3) {
	if(srting1.length>string2.length && srting1.length>string3.length) {
		return srting1;
	}
	else if(string2.length>srting1.length && string2.length>string3.length) {
		return string2;
	}
	else if(string3.length>srting1.length && string3.length>string2.length) {
		return string3;
	}
};
console.log(f4('ohHelooooo', 'okayyy', 'iAmDone'))

const f5 = function(o, y) {
     if(o===y) { 
     	return 0;
               } 
     else if(o>y) {
     	return 1;
                 }
     else if(o<y) {
        return -1;
                   }

    };

console.log(f5(6, 9));

const f6 = function(mAge, yAge) {
	return mAge * yAge;
};
console.log(f6(17, 20)); 

const f7 = function(first,second) {
	return first / second;
};
console.log(f7(684, 76));

const triangleArea = function(base, heght) {
	return f7(f6(base, heght), 2);
};
console.log(triangleArea(12,6));

const numLength = function(fl) {
	const xyz = fl + '';
	return xyz.length;
};
console.log(numLength(285693585584632632995));
	

 const f10 = function(fm, ml, lol) {
 	if((fm.length + lol.length) > lol) {
 	 return 1;
     } else {
   	    return -1;
     };
};

console.log(f10('hi', 'okay', 84584569632596258));

const f11 = function(base, height, object) {
	if(object==='rectangle') {
		return base*height;
	}
	else if(object==='triangle') {
		return (base*height)/2;
	} 
	else {
		return -1;
	}

};
console.log(f11(912, 3, 'triangle'));


