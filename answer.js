var isAnagram = function(s, t) {
    //If they are not the same length, not anagram
    if(s.length != t.length){
        return false;
    }
  
    let map = {}
    //Fill our 'map' - really just an obj 
    for(let setter = 0; setter < s.length; setter++){
        if (map[s[setter]]){
            map[s[setter]]++;
        }
        else{
            map[s[setter]] = 1;
        }
    }
  
    //If we hit a point where a char is not found, invalid
    for(let checker = 0; checker < t.length; checker++){
        if(map[t[checker]]){
            map[t[checker]]--;
        }
        else{
            return false;
        }
    }
    return true;
};
