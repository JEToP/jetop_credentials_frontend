import React, { useMemo } from "react"
import ProgressTracker from "./progressTracker"
import "./progressBar.scss"

const ProgressBar = (props: { pwd: string }) => {
  const word = props.pwd

  const percentage = useMemo((): number => {
    return checkStrength(word)
  }, [word])

  // function that evaluate the password strength

  function checkStrength(psw: string): number {
    const length = psw.length
    let pswTmp = psw
    let sum = length * 4
    let nUpperCase = 0,
      nLowerCase = 0,
      nNumbers = 0,
      nSpecials = 0,
      middleNumSpec = 0,
      requirements = 0
    let onlyNumber = true,
      onlyLetter = true
    let consecUpperCase = 0,
      consecLowerCase = 0,
      consecNumbs = 0
    let consecUpperCaseCnt = 0,
      consecLowerCaseCnt = 0,
      consecNumbsCnt = 0
    let repeatedCnt = 0,
      repeatedInc = 0,
      uniqChar = 0
    let numPrev = 0,
      numPPrev = 0
    let seqUppCase = 0,
      seqLowerCase = 0,
      seqNumber = 0,
      seqCnt = 0
    let seqUppCaseR = 0,
      seqLowerCaseR = 0,
      seqNumberR = 0,
      seqCntR = 0

    for (let i = 0; i < length; i++) {
      if (psw[i].match(/[A-Z]/g)) {
        consecUpperCase++
        consecLowerCase = 0
        consecNumbs = 0
        nUpperCase++
        onlyNumber = false
        if (consecUpperCase >= 2) {
          consecUpperCaseCnt++

          if (numPrev === numPPrev + 1) {
            if (seqCnt > 0) {
              seqLowerCase++
            } else {
              seqCnt++
              seqCntR = 0
            }
          } else if (numPrev === numPPrev - 1) {
            if (seqCntR > 0) {
              seqLowerCaseR++
            } else {
              seqCntR++
              seqCnt = 0
            }
          }
        } else {
          seqCnt = 0
          seqCntR = 0
        }

        numPrev = psw.charCodeAt(i)
      } else if (psw[i].match(/[a-z]/g)) {
        consecUpperCase = 0
        consecLowerCase++
        consecNumbs = 0
        nLowerCase++
        onlyNumber = false
        if (consecLowerCase >= 2) {
          consecLowerCaseCnt++

          if (numPrev === numPPrev + 1) {
            if (seqCnt > 0) {
              seqLowerCase++
            } else {
              seqCnt++
              seqCntR = 0
            }
          } else if (numPrev === numPPrev - 1) {
            if (seqCntR > 0) {
              seqLowerCaseR++
            } else {
              seqCntR++
              seqCnt = 0
            }
          }
        } else {
          seqCnt = 0
          seqCntR = 0
        }

        numPrev = psw.charCodeAt(i)
      } else if (psw[i].match(/[0-9]/g)) {
        consecUpperCase = 0
        consecLowerCase = 0
        consecNumbs++
        nNumbers++
        onlyLetter = false
        if (consecNumbs >= 2) {
          numPPrev = numPrev
          consecNumbsCnt++

          if (numPrev === numPPrev + 1) {
            if (seqCnt > 0) {
              seqNumber++
            } else {
              seqCnt++
              seqCntR = 0
            }
          } else if (numPrev === numPPrev - 1) {
            if (seqCntR > 0) {
              seqNumberR++
            } else {
              seqCntR++
              seqCnt = 0
            }
          }
        } else {
          seqCnt = 0
          seqCntR = 0
        }

        numPrev = parseInt(psw[i])
      } else {
        nSpecials++
        onlyNumber = false
        onlyLetter = false
      }
      if (i > 0 && i < length - 1) {
        if (!pswTmp[i].match(/[A-z]/g)) {
          middleNumSpec++
        }
      }
      /* Internal loop through password to check for repeated characters 
      Increment is based on proximity to identical characters
      The amount is based on total password length divided by the
      difference of distance between currently selected match 
      Duplicate character are replaced by an empty char to avoid double count*/

      let isDuplicated = false
      for (let j = i + 1; j < length - 1; j++) {
        if (pswTmp[i] === pswTmp[j] && pswTmp[i] !== " ") {
          isDuplicated = true
          repeatedInc += Math.abs(length / (j - i))
          repeatedCnt++
        }
      }
      if (isDuplicated) {
        let myRegex = new RegExp(pswTmp[i], "g")
        pswTmp = pswTmp.replace(myRegex, " ")
        uniqChar = length - repeatedCnt
        repeatedInc = uniqChar
          ? Math.ceil(repeatedInc / uniqChar)
          : Math.ceil(repeatedInc)
      }
    }

    // points assignment based on previous calculations

    if (nUpperCase > 0 && nUpperCase < length) {
      sum += (length - nUpperCase) * 2
      requirements++
    }

    if (nLowerCase > 0 && nLowerCase < length) {
      sum += (length - nLowerCase) * 2
      requirements++
    }

    if (nNumbers > 0 && nNumbers < length) {
      sum += nNumbers * 4
      requirements++
    }

    if (nSpecials > 0) {
      sum += nSpecials * 6
      requirements++
    }

    if (middleNumSpec > 0) {
      sum += middleNumSpec * 2
    }

    if (length >= 8) {
      requirements++
    }

    if (requirements > 0) {
      sum += requirements
    }

    if (onlyNumber || onlyLetter) {
      sum -= length
    }

    if (repeatedCnt > 0) {
      sum -= repeatedInc
    }

    if (consecUpperCaseCnt > 0) {
      sum -= consecUpperCaseCnt * 2
    }

    if (consecLowerCaseCnt > 0) {
      sum -= consecLowerCaseCnt * 2
    }

    if (consecNumbsCnt > 0) {
      sum -= consecNumbsCnt * 2
    }

    if (seqNumber > 0 || seqNumberR > 0) {
      let numTmp = seqNumber + seqNumberR
      sum -= numTmp * 3
    }

    if (seqUppCase > 0 || seqUppCaseR > 0) {
      let uppCTmp = seqUppCase + seqUppCaseR
      sum -= uppCTmp * 3
    }

    if (seqLowerCase > 0 || seqLowerCaseR > 0) {
      let lowCTmp = seqLowerCase + seqLowerCaseR
      sum -= lowCTmp * 3
    }

    // The return must be an integer between 0 and 100

    if (sum <= 0) {
      sum = 0
    } else if (sum >= 100) {
      sum = 100
    } else {
      sum = Math.floor(sum)
    }
    console.log(`sum ${sum}`)

    return sum
  }

  return (
    <div className="progressBarDiv">
      <ProgressTracker value={percentage} />
    </div>
  )
}

export default ProgressBar
