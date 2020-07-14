import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable()
export class OvfGuard implements CanActivate {
  INSTALLATION_TYPE = "ovf";

  constructor() {}

  /**
   * Check resolution for ovf route
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return environment.installationType === this.INSTALLATION_TYPE;
  }
}
