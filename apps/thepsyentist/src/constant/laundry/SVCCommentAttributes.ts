import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCCustomerComment: Attribute[] = [
  { ...attributes.type, description: '"CUSTOMER_COMMENT"로 고정 값 입니다.' },
  attributes.id,
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  { ...attributes.userData, type: 'LaundryCustomerComment', description: 'CustomerComment의 고유 정보입니다.' },
];

const SVCReceiptComment: Attribute[] = [
  { ...attributes.type, description: '"RECEIPT_COMMENT"로 고정 값 입니다.' },
  attributes.id,
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  { ...attributes.userData, type: 'LaundryReceiptComment', description: 'ReceiptComment 고유 정보입니다.' },
];

const commentUserData: Attribute[] = [
  { name: 'title', required: true, type: 'string', description: '고객 요청사항의 제목' },
  { name: 'commentType', required: true, type: 'string', description: '고객 요청사항의 타입(현재는 사용되고 있지 않음)' },
  { name: 'content', required: true, type: 'string', description: '고객 요청사항의 내용' },
  { name: 'svcOrderId', required: true, type: 'string', description: '고객 요청사항을 적용시킬 주문의 SVC Id입니다.' },
  { name: 'svcUserId', required: true, type: 'string', description: '고객 요청사항에 대한 고객 SVC Id입니다.' },
  { name: 'answer', required: false, type: 'Answer', description: '답변' },
  { name: 'isExpose', required: false, type: 'boolean', description: '고객 요청사항 노출여부' },
];

const answer: Attribute[] = [
  { name: 'content', required: true, type: 'string', description: '답변에 대한 내용입니다' },
  { name: 'date', required: true, type: 'number', description: '답변한 시간 입니다.(unix time)' },
];

const receiptUserData: Attribute[] = [
  { name: 'content', required: true, type: 'string', description: '지시사항의 내용입니다.' },
  { name: 'svcOrderId', required: true, type: 'string', description: '지시사항을 적용시킬 주문의 SVC Id입니다.' },
  { name: 'svcUserId', required: true, type: 'string', description: '지시사항에 대한 고객 SVC Id입니다.' },
  { name: 'isExpose', required: false, type: 'boolean', description: '지시사항 노출여부' },
];

export default {
  customerRoot: SVCCustomerComment,
  receiptRoot: SVCReceiptComment,
  commentUserData: commentUserData,
  receiptUserData: receiptUserData,
  answer: answer,
};
