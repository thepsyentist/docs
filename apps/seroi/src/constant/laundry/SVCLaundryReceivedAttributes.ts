import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCLaundryReceived: Attribute[] = [
  { ...attributes.type, description: 'Doc의 Type입니다. "LAUNDRY_RECEIVED"로 고정 값 입니다.' },
  attributes.id,
  { ...attributes.bucketId, description: '해당 세탁물이 속하는 주문이 발생한 함의 bucketId입니다.(단지)' },
  { ...attributes.parentId, description: '해당 세탁물이 속하는 주문의 docId입니다.' },
  { name: 'title', required: true, type: 'string', description: '해당 세탁물의 카테고리 타이틀 입니다. \n ex) 세탁물카테고리_셔츠/남방/블라우스_남방(마)' },
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  {
    ...attributes.status,
    type: 'LaundryReceivedStatus',
    description: '세탁물에 대한 상태 \n*아래 설명 참고',
  },
  { ...attributes.userData, type: 'LaundryReceivedItem', description: '세탁물의 고유정보를 나타냅니다.' },
];

const userData: Attribute[] = [
  { name: 'product', required: true, type: 'ItemProduct', description: '세탁품목 데이터입니다.' },
  { name: 'luxury', required: false, type: 'ItemLuxury', description: '명품/브랜드 데이터입니다.' },
  { name: 'extra', required: false, type: 'ItemExtra', description: '추가요금 관련 데이터입니다.' },
  { name: 'notify', required: false, type: 'ItemNotify', description: '고지사항 데이터입니다.' },
  { name: 'totalPrice', required: true, type: 'number', description: '총 가격입니다.' },
  { name: 'description', required: true, type: 'string | null', description: 'CS지시사항 입니다.' },
  { name: 'statusHistory', required: true, type: 'Array<LaundryReceivedStatus>', description: '상태변화에 대한 히스토리 저장 배열입니다.' },
  { name: 'orderUser', required: true, type: 'OrderUser', description: '해당 주문의 고객정보 데이터입니다.' },
  { name: 'timeLog', required: false, type: 'TimeLog', description: '해당 세탁물의 상태 변화에 따른 시간 기록입니다.' },
];

const itemProduct: Attribute[] = [
  { name: 'code', required: true, type: 'string | null', description: '세탁품목의 코드입니다.' },
  { name: 'name', required: true, type: 'string | null', description: '세탁품목의 이름입니다.' },
  { name: 'price', required: true, type: 'number | null', description: '세탁품목의 가격입니다.' },
  { name: 'image', required: true, type: 'string | null', description: '세탁품목의 이미지입니다.' },
];

const itemLuxury: Attribute[] = [
  { name: 'code', required: true, type: 'string | null', description: '명품/브랜드 코드입니다.' },
  { name: 'name', required: true, type: 'string | null', description: '명품/브랜드 이름입니다.' },
];

const itemExtra: Attribute[] = [
  { name: 'price', required: true, type: 'number | null', description: '추가요금 가격입니다.' },
  { name: 'reason', required: true, type: 'ExtraReason | null', description: '추가요금 발생 이유입니다.' },
];

const itemNotify: Attribute[] = [
  { name: 'code', required: true, type: 'string | null', description: '고지사항 코드입니다.' },
  { name: 'name', required: true, type: 'string | null', description: '고지사항 이름입니다.' },
];

const orderUser: Attribute[] = [
  { name: 'phone', required: true, type: 'string', description: '고객의 핸드폰 번호입니다.' },
  { name: 'svcId', required: true, type: 'string', description: '고객의 SVCUser의 Id입니다.' },
  { name: 'uniqueId', required: true, type: 'string', description: '고객의 고유 Id입니다.' },
];

const extraReason: Attribute[] = [
  { name: 'isFluff', required: true, type: 'boolean', description: '보풀여부 입니다.' },
  { name: 'isContamination', required: true, type: 'boolean', description: '오염여부 입니다.' },
];

const timeLog: Attribute[] = [
  {
    name: 'receiptDate',
    required: false,
    type: 'number(ms)',
    description: ' 최종 접수 완료 시간 값 입니다.',
  },
  {
    name: 'notifyResponseDate',
    required: false,
    type: 'number(ms)',
    description: '고객 응답 완료 시간(세탁요청, 반송요청) 값 입니다.',
  },
  {
    name: 'requestCompleteDate',
    required: false,
    type: 'number(ms)',
    description: '고객 응답에 대한 요청 완료 시간 값 입니다.',
  },
  {
    name: 'cleanCompleteDate',
    required: false,
    type: 'number(ms)',
    description: '세탁물 QR찍고, QR스티커 출력한 시간 값 입니다.',
  },
  {
    name: 'readyDate',
    required: false,
    type: 'number(ms)',
    description: '세탁물 옷걸이에서 세탁분류 스캔한 시간 값 입니다.',
  },
  {
    name: 'completeDate',
    required: false,
    type: 'number(ms)',
    description: '출고페이지에서 영수증 출력한  시간 값 입니다.',
  },
];

export default {
  root: SVCLaundryReceived,
  userData: userData,
  timeLog: timeLog,
  itemProduct: itemProduct,
  itemLuxury: itemLuxury,
  itemExtra: itemExtra,
  itemNotify: itemNotify,
  orderUser: orderUser,
  extraReason: extraReason,
};
