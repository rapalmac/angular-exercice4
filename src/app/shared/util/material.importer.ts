import { MatInput, MatHint, MatLabel, MatError, MatFormField } from "@angular/material/input";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatButton } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatTab, MatTabBody, MatTabGroup, MatTabContent } from "@angular/material/tabs";
import { MatToolbar } from "@angular/material/toolbar";
import { MatSelect, MatOption} from "@angular/material/select";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginator } from "@angular/material/paginator";


export function importMatComponents() {    
    return [
        MatInput, MatHint, MatLabel, MatError, MatFormField,
        MatButton,
        MatTableModule, MatPaginator,
        MatCheckbox,
        MatSelect, MatOption,
        MatSnackBarModule
    ];
}

export function importAppHeaderComponents() {
    return [
        MatTab, MatTabBody, MatTabGroup, MatTabContent,
        MatToolbar,
        MatButton
    ];
}