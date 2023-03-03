import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveContactComponent } from '../form/reactive-contact/reactive-contact.component';
import { WhitoutsaveGuard } from '../guards/whitoutsave.guard';
import { DataResolverService } from '../resolvers/data.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ReactiveContactComponent,
    resolve: { departments: DataResolverService },
    canDeactivate: [WhitoutsaveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactReactiveRoutingModule {}
