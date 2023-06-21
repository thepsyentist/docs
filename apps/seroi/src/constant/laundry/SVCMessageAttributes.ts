import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCMessage: Attribute[] = [
  { ...attributes.type, description: 'Doc의 Type입니다. "MESSAGEINFO"로 고정 값 입니다.' },
  attributes.id,
  { ...attributes.bucketId, description: '문자의 버킷 ID값 입니다. 고유 값 입니다. (SVCBucket_881050921521152)' },
  {
    name: 'title',
    required: true,
    type: 'string',
    description: '문자 내용 앞에 들어갈 제목입니다. \nex) [무인세탁함] TEST 세탁함에 세탁이 완료되었습니다. 의 문자 내용에서 "무인세탁함" 을 말합니다.',
  },
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  { ...attributes.userData, type: 'LaundryMessage', description: '문자의 고유정보를 나타냅니다.' },
];

const userData: Attribute[] = [
  { name: 'apiKey', required: true, type: 'string', description: '알리고 계정의 API키 값 입니다.' },
  { name: 'senderPhoneNumber', required: true, type: 'string', description: '문자 전송 시 발신 번호로 표시될 번호 값 입니다.' },
  { name: 'userId', required: true, type: 'string', description: '알리고 계정의 ID 값 입니다.' },
];

export default {
  root: SVCMessage,
  userData: userData,
};
