UPDATE houser
SET name=${name}, address=${address}, city=${city}, state=${state}, zip=${zip}, img=${img}, mortgage=${mortgage}, rent=${rent}
WHERE id=${id}

SELECT * FROM houser