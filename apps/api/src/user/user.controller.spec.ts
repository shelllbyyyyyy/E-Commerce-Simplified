import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

describe("userController", () => {
  let user: TestingModule;

  beforeAll(async () => {
    user = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();
  });

  describe("getHello", () => {
    it('should return "Hello Arif"', () => {
      const userController = user.get(UserController);
      expect(userController.getHello()).toBe("Hello Arif");
    });
  });
});
