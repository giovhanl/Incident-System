import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

// this class is for sessions
@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    return request.isAuthenticated();
  }
}
