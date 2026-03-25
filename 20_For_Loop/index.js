// for loop
for(let i=0;i<=5;i++){
    console.log(i);
}

// continue statement
for(let i=1;i<=5;i++){
    if(i==3){
        continue;   // 3 was skipped because of continue statement
    }
    console.log(i);
}

// break statement
for(let i=1;i<=5;i++){
    if(i==3){
        break;      // when i was 3 the loop will break there after
    }
    console.log(i);
}