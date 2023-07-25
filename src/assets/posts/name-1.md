Depuis Angular [v16.1.0](https://github.com/angular/angular/releases/tag/16.1.0), il existe une alternative facile à l’utilisation de setter et getter pour transformer les inputs. 

Le décorateur @Input inclut désormais une option de transformation qui accepte une fonction permettant de transformer l'input avant de l'affecter à l'instance du composant (ou directive).

A quoi ça sert me dirait vous ? 

Voici un premier exemple pour comprendre : 

Imaginons que nous ayons un composant `TowerComponent` qui représente une tour (une simple div avec un gris en background 😅) le composant prend en input une hauteur. 

```tsx
function toNumber(value: string | number) {
	return isNumber(value) ? value : parseInt(value);
}

@Component({
	standalone: true,
	selector: 'app-tower',
	template: `<div class="tower"[style.height.px]="height"></div>`,
  styles: [`
    .tower {
      background: #555;
      width: 10px;
    }
  `]
})
export class TowerComponent {
	@Input({ transform: toNumber }) height: number;
}
```
Alors qu'avec le pattern setter/getter on aurait eu :  

```tsx
export class ButtonComponent {
 @Input()
 get height() {
    return this._height;
  }
 set height(value: string | number) {
    this._height = toNumber(value)
 }
 private _height = false;
}
```
Plus lisible avec transform n'est-ce pas ?

La fonction de transformation `toNumber` se chargera de la conversion, transformant ainsi la valeur de string en nombre. 

Dans le composant parent on aura : 

```tsx
<app-tower height="42" />
```

C'est pas tout, Angular fournit également des fonctions utilitaires dans `@angular/core` permettant de couvrir les cas d’utilisation courant :  

- `numberAttribute`
- `booleanAttribute`

On peut donc supprimer la fonction `toNumber` et refactoriser notre `TowerComponent` en : 

```tsx
export class TowerComponent {
	@Input({ transform: numberAttribute }) height: number;
}
```

Un autre scénario où cette fonctionnalité est pratique est lors de la manipulation d'attributs HTML. 

Les attributs booléens sont considérés comme vrais s'ils sont présents sur un nœud DOM et comme faux s'ils sont omis. 

Cependant, Angular interprète tous les attributs statiques comme des chaînes de caractères, ce qui entraîne souvent un problème. Par exemple, le code suivant `disabled` renverrait une chaîne vide :

```tsx
@Component({
	standalone: true,
	selector: 'app-button',
	// ... 
})
export class ButtonComponent {
	@Input() disabled: boolean;
}

<app-button disabled />
```

L’utilisation de l’utilitaire `booleanAttribute` avec l’option de transformation permet de résoudre ce problème sans utiliser le pattern setter/getter.

```tsx
@Component({
	standalone: true,
	selector: 'app-button',
	// ... 
})
export class ButtonComponent {
	@Input({ transform: booleanAttribute }) disabled: boolean = false;
}
```

La fonction de transformation `booleanAttribute` s’occupe de gérer la conversion en booléen. Grâce à ça, lorsque nous utilisons le composant `ButtonComponent` et que nous spécifions l'attribut disabled :

```tsx
<app-button disabled />
```

La fonction de transformation interprétera correctement la présence de l'attribut comme vrai.

Pour conclure nous avons vu que l'option de transformation dans le décorateur @Input simplifie le processus de transformation d'Input, offrant une approche qui rend notre code plus lisible par rapport à l’approche traditionnelles. L'utilisation des fonctions `numberAttribute` et `booleanAttribute` nous permet de couvrir la majorité des cas d’utilisation.