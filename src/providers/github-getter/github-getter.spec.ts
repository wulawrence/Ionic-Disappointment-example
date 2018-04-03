import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubGetterProvider } from './github-getter';

describe('GithubService', () => {
  const profileInfo = {
    login: 'wulawrence',
    id: 32226438,
    name: 'Lawrence Wu'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubGetterProvider]
    });
  });

  it('should get profile data of user', () => {
    const githubService = TestBed.get(GithubGetterProvider);
    const http = TestBed.get(HttpTestingController);
    let profileResponse;

    githubService.getProfile('wulawrence').subscribe((response) => {
      profileResponse = response;
    });

    http.expectOne('https://api.github.com/users/wulawrence').flush(profileInfo);
    expect(profileResponse).toEqual(profileInfo);
  });
});
