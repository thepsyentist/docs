import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCContainer: Attribute[] = [
  { ...attributes.type, description: '"CONTAINER"로 고정 값 입니다.' },
  attributes.id,
  { ...attributes.bucketId, description: '세탁함이 속해있는 Complex의 id 입니다.' },
  { ...attributes.parentId, description: '세탁함이 속해있는 Complex의 id 입니다.' },
  { name: 'title', required: false, type: 'string', description: '세탁함의 이름입니다. \nex) 롯데캐슬스카이 101동' },
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  { ...attributes.status, type: '"ACTIVE" | "STOP" | "PREPARE"', description: '세탁함의 동작 상태 값 입니다. \n활성화 / 중단 / 준비중 상태 값으로 사용 됩니다.' },
  { ...attributes.code, description: '세탁함의 고유 코드 입니다.' },
  { ...attributes.userData, type: 'LaundryContainer', description: '세탁함의 고유정보를 나타냅니다.' },
];

const userData: Attribute[] = [
  { name: 'address', required: false, type: 'string', description: '세탁함이 설치된 주소(지번/도로명) 입니다.' },
  { name: 'bridgeVersion', required: false, type: 'string', description: '브릿지 버전 값 입니다.' },
  { name: 'chromeversion', required: false, type: 'string', description: '크롬 버전 값 입니다' },
  { name: 'count', required: false, type: 'string', description: '세탁함의 보관함 갯수 입니다. \n일반적으로는 17개로 구성됩니다.' },
  { name: 'connectCount', required: false, type: 'string', description: '세탁함에 연결된 보관함의 갯수 입니다.' },
  { name: 'diffTime', required: false, type: 'number(ms)', description: '데이터베이스의 시간 값과 로컬컴퓨터의 시간 값의 차이 값 입니다.' },
  { name: 'floor', required: false, type: 'string', description: '세탁함 내 보관함이 구성하고 있는 층수 값 입니다.' },
  { name: 'interval', required: false, type: 'string', description: '서버에 세탁함의 정보를 주기적으로 업데이트 하는 시간 값 입니다.' },
  { name: 'adminWaitTime', required: false, type: 'string', description: '관리자 화면의 대기시간 값 입니다.' },
  { name: 'phoneWaitTime', required: false, type: 'string', description: '번호 입력화면에서의 대기시간 값 입니다.' },
  { name: 'lockerWaitTime', required: false, type: 'string', description: '보관함 선택화면에서의 대기시간 값 입니다.' },
  { name: 'isAdminUpdate', required: false, type: 'boolean', description: '관리자 페이지에서 관리자의 조작 유무를 판단하는 값 입니다.' },
  { name: 'localTime', required: false, type: 'number', description: '로컬 컴퓨터의 시간 값 입니다.' },
  { name: 'location', required: false, type: 'string', description: '세탁함이 설치 위치 된 상세 위치 입니다.' },
  { name: 'lockername', required: false, type: 'string', description: '세탁함 이름 입니다. \ntitle과 동일 합니다.' },
  { name: 'payment', required: false, type: '"thepsyentist" | "iroomi"', description: '세탁함의 권한(매출)을 가진 회사 명 입니다. \n새로이 또는 이루미로 구분 됩니다.' },
  { name: 'status', required: false, type: '["OK"] | ["CU", "80"] | ["FULL"]', description: '세탁함의 이용/연결 가능 여부의 값 입니다.' },
  { name: 'boxes', required: false, type: 'LaundryBox[]', description: '보관함들의 상세 값 입니다. \n아래에서 상세 데이터를 확인 할 수 있습니다.' },
  { name: 'messages', required: false, type: 'Message', description: '보관함의 문자 전송 관련 정보 값 입니다. \n아래에서 상세 데이터를 확인 할 수 있습니다.' },
  { name: 'uniqueCode', required: false, type: 'string', description: '보관함의 유니크 정보로, "지역번호_단지번호_세탁함번호" 조합입니다.' },
  { name: 'areaCode', required: false, type: 'string', description: '세탁함의 지역번호 입니다.' },
  { name: 'complexCode', required: false, type: 'string', description: '세탁함의 단지번호 입니다.' },
  { name: 'containerCode', required: false, type: 'string', description: '세탁함의 세탁함번호 입니다.' },
];

const boxes: Attribute[] = [
  { name: 'code', required: true, type: 'number', description: '지정 된 보관함 번호 입니다.' },
  { name: 'status', required: true, type: '"OPEN" | "CLOSE"', description: '문열림 상태 값 입니다.' },
  { name: 'substatus', required: true, type: 'BoxInsideStatus', description: '동작 상태 값 입니다.' },
  { name: 'brokentime', required: true, type: 'number(Unix Timestamp)', description: '고장난 시간 값 입니다.' },
  { name: 'isBroken', required: true, type: 'boolean', description: '고장 여부 값 입니다.' },
  { name: 'order', required: false, type: 'ORDER', description: '보관함에 등록 된 주문 정보 값 입니다. \n고객이 세탁물을 보관시 주문 정보가 등록 됩니다.' },
];

const message: Attribute[] = [
  { name: 'apiKey', required: false, type: 'string(알리고)', description: 'API KEY 값 입니다.' },
  { name: 'userId', required: false, type: 'string(알리고)', description: 'API ID 값 입니다.' },
  { name: 'senderPhoneNumber', required: false, type: 'string', description: '메세지 발송되는 고객 전화번호 값 입니다.' },
  { name: 'title', required: false, type: 'string', description: '메세지의 상단에 입력되는 제목 값 입니다.' },
];

export default {
  root: SVCContainer,
  userData: userData,
  boxes: boxes,
  message: message,
};
