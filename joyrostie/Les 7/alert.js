var a = 1, b = 1, c, X;

c = ++a;  // 2
X = b++; // 1

c = (2+ ++a); alert(c); // 5
X = (2+ ++b); alert(X); // 4

alert (b);