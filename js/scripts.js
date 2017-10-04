function drawTree(h) {
for (i=1;i<=h;i++) {
for (star=1;star<=i;star++)
{
document.write("*");
}
document.write("<br>");
}
}

drawTree(11);