/*
class Blockchain {
  constructor() {
    this.chain = [];
    this.newTransactions = [];
  }
  // Here you can build out all of the methods
  // that we are going to write inside of this
  // Blockchain class.
}
*/

function Blockchain() {
  this.chain = [];  //  채굴한 모든 블록들을 체인으로 저장.
  this.newTransactions = [];  // 블록에 아직 저장되지 않은 모든 트랜잭션들을 저장.
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {  // 새 블록. newBlock 객체는 BlockChain 안의 새로운 블록이 된다. 즉, 모든 관련 데이터들은 이 블록 안에 저장된다.
    index: this.chain.length + 1,  // 블록 번호. newBlock이 해당 블록체인 내에서 몇 번째 블록인지 알려줌.
    timestamp: Date.now(),  // 블록이 생성된 시점.
    transactions: this.newTransactions,  // 새로운 블록을 만들었을 때 모든 새로운 트랜잭션들과 미결 트랜잭션들을 새로운 블록에 추가. 이를 통해 이 트랜잭션들은 블록체인 내에 보관되어 영원히 변하지 않게 됨.
    nonce: nonce,  // (number) proofOfWork 메서드를 통해 적법하게 새로운 블록을 만들었다는 증거.
    hash: hash,  // newBlock 객체에서 온 값. 현재 블록의 데이터를 해싱한 값. newTransactios를 해싱 함수에 매개변수로 전달 → 트랜잭션들은 하나의 문자열로 압축되며 hash 값이 된다.
    previousBlockHash: previousBlockHash,  // 이전 블록의 데이터, 또는 이전 블록에서 현재 블록까지의 데이터를 해싱한 값
  };
  this.newTransactions = [];  // (??) 새로운 블록을 만들 때, 모든 새로운 트랜잭션들을 해당 블록에 추가하기 때문이다. 그러므로 새로운 트랜잭션들 배열을 초기화하고 그 후에 새로운 다음 블록 생성을 시작할 수 있다.
  this.chain.push(newBlock);  // 새로운 블록을 체인에 추가.
  return newBlock;  // newBlock 반환
}