import { describe, test, expect, beforeEach } from '@jest/globals';
import { getPost, createPost } from '../../controllers/posts';
// models
import PostMessage from '../../models/postMessage';
// 실제 데이터를 추가할때 사용할 req, res 객체 생성을 위한 node-mocks-http
import httpMocks from 'node-mocks-http';
// req.body에 넣어 줄 데이터
import newPost from '../data/new-post.json';
import 'regenerator-runtime/runtime';

// 단위테스트이기 때문에 model에 직접적으로 영향을 주면 안되기 때문에 mock함수를 사용한다.
// mock 함수를 사용하면 호출되는 함수를 tracking할 수 있다.(어떤 것에 의해서 호출되는지)
// spy를 통해서 model의 함수가 호출되었는지 추적 가능

PostMessage.create = jest.fn();

let req, res, next;

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

describe('Product Controller Create', () => {
    beforeEach(() => {
        req.body = newPost;
    });
    test('createPost 함수가 존재한다.(Controller)', async() => {
        expect(typeof await createPost).toBe('function');
    });
    test('createPost 함수가 호출되어야 한다.', async() => {
        await createPost(req, res);
        expect(PostMessage.create).toBeCalledWith(newPost);
    });
    test('200 response code가 반환된다.', async() => {
        await createPost(req, res);
        expect(res.statusCode).toBe(201);
    });
    test('response과 함께 json이 반환된다.', async() => {
        PostMessage.create.mockReturnValue(newPost);
        await createPost(req, res);
        expect(res._getJSONData()).toStrictEqual(newPost);
    });
});