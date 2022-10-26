#directory 

![CI_CD drawio](https://user-images.githubusercontent.com/71241225/197940501-a656cf6e-6ec2-471c-ba5a-f1df8ecd28f0.svg)

* .github/workflows 아래 yml이 실행 된다.
* 해당 코드는 master branch에 push가 될 경우 트리거 되며 동작한다.
* 일부 환경 변수는 민감 정보이기에 
  github -> repositorys -> Settings -> Secrets -> Repository secrets 에 변수를 작성 하고
  가져다 쓴다.
* 전체 적인 CICD 구성에해서 git-action의 역활은
  docker build -> docker images 생성 -> ecr push이다.


 * [workflows](./workflows)
     * [Dockerfile](./workflows/Dockerfile)
     * [prtest.yml](./workflows/prtest.yml)
     * [push_ecr.yml](./workflows/push_ecr.yml)

.


