import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCOrder: Attribute[] = [
  attributes.id,
  { name: 'email', required: false, type: 'string', description: '사용자의 이메일 입니다.\n*사용하지는 않습니다.' },
  { name: 'username', required: true, type: 'string', description: '사용자의 id 입니다. \n해당 유저가 배송기사인 경우는 dv07' },
  { name: 'names.fullname', required: true, type: 'string', description: '사용자의 이름 입니다. \n해당 유저가 배송기사인 경우는 홍길동' },
  { name: 'roles', required: true, type: 'UserRoles', description: '고객, 배송기사 , 지사 , 점주, 일반 관리자, 최고 관리자 나누기 위한 역할 필드입니다. \n*설명 아래 참고' },
  attributes.updated,
  attributes.created,
  attributes.status,
  { ...attributes.userData, type: 'LaundryUser', description: '사용자의 고유정보를 나타냅니다.' },
];

const userData: Attribute[] = [
  { name: 'containerId', required: false, type: 'string', description: '해당 유저가 고객인 경우 이용하는 함의 id값에 대한 정보입니다.' },
  { name: 'userUniqueId', required: false, type: 'string', description: '해당 유저가 고객인 경우 고객의 고유 Id입니다.' },
  { name: 'points', required: false, type: 'number', description: '해당 유저가 고객인 경우 고객의 적립금입니다.' },
  { name: 'onComplexId', required: false, type: 'string[]', description: '해당 유저가 배송기사인 경우 맡고 있는 단지의 id값들에 대한 정보입니다.' },
  { name: 'onContainerIdList', required: false, type: 'string[]', description: '해당 유저가 배송기사인 경우 맡고 있는 보관함의 id값들에 대한 정보입니다.' },
];

export default {
  root: SVCOrder,
  userData: userData,
};
