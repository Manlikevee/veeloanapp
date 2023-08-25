import { createParamDecorator, ExecutionContext } from '@nestjs/common';
type jwtPayLoad = {
  sub: number;
  email: string;
};

export const GetCurrentUserId = createParamDecorator(
  (data: undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as jwtPayLoad;
    return user.sub;
  },
);
