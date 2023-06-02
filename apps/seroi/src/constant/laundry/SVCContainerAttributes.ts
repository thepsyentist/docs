import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCContainerAttributes: Attribute[] = [
  { ...attributes.type, description: 'Doc의 Type입니다. "CONTAINER"로 고정 값 입니다.' },
  attributes.id,
  {...attributes.bucketId,description: '해당 함이 속한 Complex의 id 입니다.'},
  {...attributes.parentId,description: '해당 함이 속한 Complex의 id 입니다.(bucketId와 동일)'},
  { name: 'title', required: false, type: 'string', description: '함의 이름입니다. \n ex) 롯데캐슬스카이 101동' },
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  {...attributes.status, type:'"ACTIVE" | "STOP" | "PREPARE"' ,description:'활성화 / 중단 / 준비중 상태' },
  {...attributes.code, description: '함 고유 코드'},
  { name: 'userData.address', required: false, type: 'string', description: '함 설치 주소' },
  { name: 'userData.bridgeVersion', required: false, type: 'string', description: '브릿지 버전' },
  { name: 'userData.chromeversion', required: false, type: 'string', description: '크롬 버전' },
  { name: 'userData.connectCount', required: false, type: 'string', description: '실 연결된 함개수' },
  { name: 'userData.count', required: false, type: 'string', description: '보관함개수 보통 17개이며 connectCount와 동일' },
  { name: 'userData.diffTime', required: false, type: 'number', description: 'db시간과 로컬컴퓨터의 시간 차이 / ms단위' },
  { name: 'userData.floor', required: false, type: 'string', description: '설치 된 층수' },
  { name: 'userData.interval', required: false, type: 'string', description: '서버에 업데이트 하는 시간(주기)' },
  { name: 'userData.adminWaitTime', required: false, type: 'string', description: '관리자 화면 대기시간' },
  { name: 'userData.phoneWaitTime', required: false, type: 'string', description: '번호 입력화면에서의 대기시간' },
  { name: 'userData.lockerWaitTime', required: false, type: 'string', description: '함 선택화면에서의 대기시간' },
  { name: 'userData.isAdminUpdate', required: false, type: 'boolean', description: '관리자 페이지에서 관리자가 조작했는지 유무' },
  { name: 'userData.localTime', required: false, type: 'number', description: '로컬 컴퓨터의 시간' },
  { name: 'userData.location', required: false, type: 'string', description: '함 설치 위치' },
  { name: 'userData.lockername', required: false, type: 'string', description: '함 이름 = title과 동일' },
  { name: 'userData.payment', required: false, type: '"seroi" | "iroomi"', description: '매출 잡히는 회사 (새로이 or 이루미)' },
  { name: 'userData.messages', required: false, type: 'Message', description: '함의 문자 전송 관련 정보' },
  { name: 'userData.boxes', required: false, type: 'Box', description: '함의 1번함부터 17번(보통) 함까지의 상세 내용' },
  { name: 'userData.status', required: false, type: '["OK"] | ["CU", "80"] | ["FULL"]', description: 'status와 userStatus는 다른형태의 status로 함의 이용가능한지와 연결' },
];

export default SVCContainerAttributes;
