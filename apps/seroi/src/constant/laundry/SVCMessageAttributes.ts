import { Attribute } from '@docs/ui/src/types/list.type';

const SVCMessageAttributes: Attribute[] = [
  { name: 'apiKey', required: false, type: 'string', description: '알리고 API KEY 정보' },
  { name: 'senderPhoneNumber', required: false, type: 'string', description: '보내는 번호' },
  { name: 'title', required: false, type: 'string', description: '문자메세지 앞에 title로 보여지는부분' },
  { name: 'userId', required: false, type: 'string', description: '알리고 API ID정보' },
];

export default SVCMessageAttributes;
